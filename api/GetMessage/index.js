module.exports = async function (context, req) {
  const date = "2023-05-25T07:08:23.579Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

