module.exports = async function (context, req) {
  const date = "2023-03-30T05:09:09.651Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

