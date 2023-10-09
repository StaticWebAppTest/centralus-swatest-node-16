module.exports = async function (context, req) {
  const date = "2023-10-09T03:09:23.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

