module.exports = async function (context, req) {
  const date = "2023-12-30T11:07:02.666Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

