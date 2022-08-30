module.exports = async function (context, req) {
  const date = "2022-08-30T09:11:08.392Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

