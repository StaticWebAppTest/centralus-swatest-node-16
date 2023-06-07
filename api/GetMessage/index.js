module.exports = async function (context, req) {
  const date = "2023-06-07T07:08:19.086Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

