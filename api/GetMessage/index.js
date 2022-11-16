module.exports = async function (context, req) {
  const date = "2022-11-16T09:11:08.141Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

