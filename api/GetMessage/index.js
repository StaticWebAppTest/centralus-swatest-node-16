module.exports = async function (context, req) {
  const date = "2023-10-30T05:09:01.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

