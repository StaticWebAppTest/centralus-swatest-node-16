module.exports = async function (context, req) {
  const date = "2022-10-04T23:13:54.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

