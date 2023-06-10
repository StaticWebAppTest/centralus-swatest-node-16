module.exports = async function (context, req) {
  const date = "2023-06-10T22:07:30.398Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

