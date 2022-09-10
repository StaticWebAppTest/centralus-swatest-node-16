module.exports = async function (context, req) {
  const date = "2022-09-10T17:17:13.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

