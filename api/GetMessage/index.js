module.exports = async function (context, req) {
  const date = "2023-07-08T10:09:13.731Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

