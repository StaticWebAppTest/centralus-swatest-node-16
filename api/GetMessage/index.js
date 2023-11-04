module.exports = async function (context, req) {
  const date = "2023-11-04T17:07:30.515Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

