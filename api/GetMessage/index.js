module.exports = async function (context, req) {
  const date = "2023-09-23T16:09:50.822Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

