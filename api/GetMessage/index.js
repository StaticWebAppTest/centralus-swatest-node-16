module.exports = async function (context, req) {
  const date = "2023-07-25T07:08:47.124Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

