module.exports = async function (context, req) {
  const date = "2022-08-11T09:11:08.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

