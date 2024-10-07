module.exports = async function (context, req) {
  const date = "2024-10-07T11:11:10.377Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

