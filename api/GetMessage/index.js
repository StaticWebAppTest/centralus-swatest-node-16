module.exports = async function (context, req) {
  const date = "2023-05-25T05:08:21.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

