module.exports = async function (context, req) {
  const date = "2023-09-19T06:11:56.292Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

