module.exports = async function (context, req) {
  const date = "2022-09-10T06:19:22.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

