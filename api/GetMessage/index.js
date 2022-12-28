module.exports = async function (context, req) {
  const date = "2022-12-28T07:08:28.396Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

