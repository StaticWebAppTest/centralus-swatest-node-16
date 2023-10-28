module.exports = async function (context, req) {
  const date = "2023-10-28T08:10:09.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

