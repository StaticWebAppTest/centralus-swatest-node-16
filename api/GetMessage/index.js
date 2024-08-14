module.exports = async function (context, req) {
  const date = "2024-08-14T07:10:18.005Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

