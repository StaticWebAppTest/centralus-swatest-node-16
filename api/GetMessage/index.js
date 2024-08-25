module.exports = async function (context, req) {
  const date = "2024-08-25T07:10:10.974Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

