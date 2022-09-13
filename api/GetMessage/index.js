module.exports = async function (context, req) {
  const date = "2022-09-13T15:13:00.533Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

