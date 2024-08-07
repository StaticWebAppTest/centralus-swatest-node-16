module.exports = async function (context, req) {
  const date = "2024-08-07T06:14:57.466Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

