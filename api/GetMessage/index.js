module.exports = async function (context, req) {
  const date = "2023-03-28T08:13:11.396Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

