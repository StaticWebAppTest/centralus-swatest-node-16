module.exports = async function (context, req) {
  const date = "2023-10-31T15:09:30.651Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

