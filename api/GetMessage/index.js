module.exports = async function (context, req) {
  const date = "2023-06-11T09:08:01.248Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

