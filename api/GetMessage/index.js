module.exports = async function (context, req) {
  const date = "2023-05-23T08:11:32.377Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

