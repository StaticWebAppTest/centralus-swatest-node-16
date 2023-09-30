module.exports = async function (context, req) {
  const date = "2023-09-30T14:07:09.505Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

