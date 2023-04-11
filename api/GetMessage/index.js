module.exports = async function (context, req) {
  const date = "2023-04-11T09:09:16.457Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

