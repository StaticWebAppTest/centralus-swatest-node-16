module.exports = async function (context, req) {
  const date = "2023-04-30T09:07:52.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

