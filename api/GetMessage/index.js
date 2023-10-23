module.exports = async function (context, req) {
  const date = "2023-10-23T16:11:20.066Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

