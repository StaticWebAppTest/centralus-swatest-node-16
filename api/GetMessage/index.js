module.exports = async function (context, req) {
  const date = "2023-06-11T22:07:45.689Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

