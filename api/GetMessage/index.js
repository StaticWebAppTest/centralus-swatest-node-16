module.exports = async function (context, req) {
  const date = "2024-05-23T16:12:45.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

