module.exports = async function (context, req) {
  const date = "2022-08-30T13:36:09.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

