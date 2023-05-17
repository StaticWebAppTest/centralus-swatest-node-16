module.exports = async function (context, req) {
  const date = "2023-05-17T07:08:07.294Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

