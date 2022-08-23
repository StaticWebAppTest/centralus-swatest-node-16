module.exports = async function (context, req) {
  const date = "2022-08-23T13:31:42.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

