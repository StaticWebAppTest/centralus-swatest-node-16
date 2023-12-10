module.exports = async function (context, req) {
  const date = "2023-12-10T17:07:39.832Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

