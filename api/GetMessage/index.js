module.exports = async function (context, req) {
  const date = "2024-03-14T07:10:45.759Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

