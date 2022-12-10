module.exports = async function (context, req) {
  const date = "2022-12-10T14:08:02.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

