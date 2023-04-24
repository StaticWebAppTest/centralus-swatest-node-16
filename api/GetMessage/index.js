module.exports = async function (context, req) {
  const date = "2023-04-24T21:07:57.832Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

