module.exports = async function (context, req) {
  const date = "2023-02-18T08:11:48.292Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

