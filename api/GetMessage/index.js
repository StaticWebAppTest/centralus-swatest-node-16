module.exports = async function (context, req) {
  const date = "2022-08-11T16:14:24.528Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

