module.exports = async function (context, req) {
  const date = "2023-10-11T14:09:03.964Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

