module.exports = async function (context, req) {
  const date = "2022-10-28T10:13:07.283Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

