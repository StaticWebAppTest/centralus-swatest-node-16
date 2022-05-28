module.exports = async function (context, req) {
  const date = "2022-05-28T07:10:24.484Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

