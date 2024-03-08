module.exports = async function (context, req) {
  const date = "2024-03-08T07:10:08.377Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

