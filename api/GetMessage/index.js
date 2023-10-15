module.exports = async function (context, req) {
  const date = "2023-10-15T17:07:18.175Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

