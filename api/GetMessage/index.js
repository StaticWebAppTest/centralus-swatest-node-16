module.exports = async function (context, req) {
  const date = "2023-10-12T16:11:30.469Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

