module.exports = async function (context, req) {
  const date = "2023-07-25T16:11:23.870Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

