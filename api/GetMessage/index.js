module.exports = async function (context, req) {
  const date = "2023-06-04T06:10:30.374Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

