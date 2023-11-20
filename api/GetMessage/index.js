module.exports = async function (context, req) {
  const date = "2023-11-20T05:09:18.292Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

